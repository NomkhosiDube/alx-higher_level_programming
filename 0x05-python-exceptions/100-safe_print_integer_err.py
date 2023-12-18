import sys

def safe_print_integer_err(value):
    try:
        # Try to format and print the value as an integer
        print("{:d}".format(value))
        return True
    except Exception as e:
        # If an exception occurs, print the error message to stderr
        print("Exception:", e, file=sys.stderr)
        return False
