# Q: What are the four basic principles of OOP
# A: Abstraction, Encapsulation, Inheritance, Polymorphism
# Q: What does each one thos things mean
# A: Abstraction-let's you see only public methods.
# A: Encapsulation-nothing outside of the object can see what's inside the object
# A: Inheritance is when you pass on an attribute to a sub-class
# A: Polymorphism is when a class is morphed into another class
# pass tells your program that you don't want to give any attributes or methods
# you can pass on your class when you want to give it values(attributes and methods) later
# an instance is when you call on your class under a different name
# each instance has a different place in memory and can be given different values
# class Employee:
#   pass

# def __init__ is like a constructor in other languages
# "self" is convention it can be called anything


# class Employee():
#     def __init__(self, name, position, password):
#         self.name = name
#         self.position = position
#         self.password = password
#     # How to declare prive method on a class

#     def __password(self):
#         print(self.password)


# class Manager(Employee):
#     def __init__(self, name, position, password, pay):
#         super().__init__(name, position, password)
#         self.pay = pay


# manager_one = Manager("Phil", "manager", "password", 5000)
# print(f"{manager_one.name} makes {manager_one.pay}")
# ======== CHALLENGE
# create a class
# this class should have three attributes first, isonline, and onlinecheck
# first is string of a first name
# isonline is a boolean of true or false
# online check is a string that says "Is <first> online right now, <isonline>"
# create an array of class instances
# write a function that takes in an array (the array of class instances)
# this function should print out which users are online and which aren't
# and a count of how many users are online


class User:
    def __init__(self, first, last, isOnline):
        self.first = first
        self.last = last
        self.isOnline = isOnline
        self.onlineCheck = f'Is {first} online right now {isOnline}'


user_one = User("Phil", "Simmons", True)
user_two = User("Phil", "Simmons", True)
user_three = User("Phil", "Simmons", True)
user_four = User("Phil", "Simmons", True)
user_five = User("Chunky", "Black", False)
user_six = User("Chunky", "Black", False)

users = [user_one, user_two, user_three, user_four, user_five, user_six]


def online(arr):
    isonline_arr = []
    for user in arr:
        if (user.isOnline):
            print(user.onlineCheck)
            isonline_arr.append(user)
        else:
            print(user.onlineCheck)

    print(f"There are {str(len(isonline_arr))} users online")


online(users)
