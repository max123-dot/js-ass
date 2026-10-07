def rearrange_largest(num):
    # Convert number to string, sort it in reverse, join back together, and convert to int
    digits = sorted(str(num), reverse=True)
    result = "".join(digits)
    return int(result)


# Test the function
my_number = 210575404
print(rearrange_largest(my_number))  # Output: 98421
