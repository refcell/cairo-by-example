%lang starknet
%builtins pedersen range_check

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.math import assert_not_zero

@external
func swap_first_element(
    a_len: felt,
    a: felt*,
    b_len: felt,
    b : felt*
) -> (
    a_len: felt,
    a: felt*,
    b_len: felt,
    b : felt*
):
    assert_not_zero(a_len)
    assert_not_zero(b_len)
    assert (a[0], b[0]) = (b[0], a[0])
    return (
        a_len=a_len,
        a=a,
        b_len=b_len,
        b=b
    )
end