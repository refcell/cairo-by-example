# child.cairo

%lang starknet
%builtins pedersen range_check

@external
func add_five(
    num: felt
) -> (
    res: felt
):
    let res: felt = num + 5
    return (res)
end