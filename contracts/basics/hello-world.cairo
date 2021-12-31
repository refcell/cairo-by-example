%lang starknet
%builtins range_check

# Alphabet substituation cipher for each letter.
# a = 01, b = 02, etc.
const hello = 10000805121215  # 08, 05, 12, 12, 15.
const world = 10002315181204  # 23, 15, 18, 12, 04.

@view
func hello_world() -> (
    word1: felt,
    word2: felt
):
    return (hello, world)
end