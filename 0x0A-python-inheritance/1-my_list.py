#!/usr/bin/python3



class MyList(list):
    """MyList class - Inherits from list"""
    def print_sorted(self):
        """Prints a sorted list"""
        print(sorted(self))
