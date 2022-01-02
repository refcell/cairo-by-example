# child.cairo

%lang starknet

@external
func add_five(
    num: felt
) -> (
    res: felt
):
    let res: felt = num + 5
    return (res)
end