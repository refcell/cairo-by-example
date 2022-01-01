%lang starknet
%builtins pedersen range_check

from starkware.cairo.common.cairo_builtins import HashBuiltin

# Constants defined in global file scope are available to all functions
const global_variable = 10

@external
func access_global_variables{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}() -> (
    global_variable: felt
):
    # Since we can access global constants from any function,
    # we can simply return it here
    return (global_variable)
end

# Since memory doesn't persist in vanilla cairo,
# Starknet exposes the @storage_var decorator to create
# persistent state variables
@storage_var
func storage() -> (res : felt):
end

@external
func variables{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}():
    alloc_locals  # allocates space for \`local\` variables to be used

    let reference = 50  # Ephemeral, revocable felt
    let reference = 51  # Redefine reference

    tempvar my_tempvar = 2 * reference  # Ephemeral, revocable expression
    tempvar my_tempvar = 3 * reference  # Redefine tempvar

    const my_const = 60 # Ephemeral, non-revocable felt. cannot redefine

    # \`local\` variables require \`alloc_locals\` to appear at the start of the function.
    local my_local = 70  # Ephemeral, non-revoacable expression, cannot redefine

    persistent_state.write(1)  # Persistent storage
    persistent_state.write(2)  # Redefine storage (aka state)

    let (state) = persistent_state.read()  # Assign reference to function output
    let (local my_local_2) = persistent_state.read()  # Assign local variable

    # !! Important !! #
    assert state = 2  # *Assigns* the value 2 to the state reference
    assert my_local_2 = 2  # Asserts that my_local_2 holds the value 2

    return ()
end