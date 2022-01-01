%lang starknet
%builtins pedersen range_check

from starkware.cairo.common.cairo_builtins import HashBuiltin

@view
func deconstruct_tuple{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}(
    tuple: (felt, felt)
) -> (
    item1: felt,
    item2: felt,
    tuple: (felt, felt)
):
    return (
        item1=tuple[0],
        item2=tuple[1],
        tuple=tuple
    )
end