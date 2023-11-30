import string
getattr(__import__('sys').stdout, 'write')(string.ascii_uppercase + '\n')

