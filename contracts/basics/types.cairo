%lang starknet
%builtins pedersen range_check

@view
func types(
    number: felt
) -> (
    string_literal: felt,
    mangled_string: felt,
):
    # In ASCII, a = 0x61 and b = 0x62
    # 'ab' = 0x6162 = 24930
    let string_literal = 'ab'

    # 24930 + 1 = 24931 = 0x6163 = a:61 c:63 = 'ac'
    let mangled_string = string_literal + 1

    return (string_literal, mangled_string)
end