import sys

def safe_function(fct, *args):
    try:
        # Try to execute the provided function with the given arguments
        result = fct(*args)
        return result
    except Exception as e:
        # If an exception occurs, print the error message to stderr
        print("Exception:", e, file=sys.stderr)
        return None
