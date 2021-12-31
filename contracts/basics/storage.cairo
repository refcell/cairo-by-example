%lang starknet
%builtins pedersen range_check

from starkware.cairo.common.cairo_builtins import HashBuiltin

@storage_var
func count() -> (res: felt):
end

# Function to get the current balance.
@view
func get{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}() -> (
    value: felt
):
    let (value) = count.read()
    return (value)
end

# Function to increment the count by 1.
@external
func increment{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}():
    let (res) = count.read()
    count.write(res + 1)
    return ()
end

# Function to decrement the count by 1.
@external
func decrement{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}():
    let (res) = count.read()
    count.write(res - 1)
    return ()
end