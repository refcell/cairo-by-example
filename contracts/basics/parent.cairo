# parent.cairo

%lang starknet
%builtins pedersen range_check

from starkware.cairo.common.cairo_builtins import HashBuiltin
from contracts.child import add_five

@storage_var
func balance() -> (bal: felt):
end

@external
func increment_balance{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr
}():
    assert_not_zero(amount)
    let (bal: felt) = balance.read()
    let (new_bal: felt) = add_five(bal)
    balance.write(new_bal)
    return ()
end