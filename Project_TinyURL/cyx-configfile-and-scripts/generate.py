import random
import string
f = open("test-data.txt", "w")
i = 1
while 1:
    i = i + 1
    ran_str = ''.join(random.sample(string.ascii_letters + string.digits, 12))
    print(ran_str)
    f.write(ran_str)
    f.write("\n")
    if i > 100 :
        break


f.close()