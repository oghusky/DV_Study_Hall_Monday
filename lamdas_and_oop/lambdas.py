# Q: What are lambdas
# A: single-line, single-use functions

# Q: How many arguments can a lambda take
# A: lambdas can take multiple arguments

# Q: What is the best use for a lambda?
# A: they are best used inside another function as a return

# ============ CHALLENGE
# Write a simple calculator
# this calculator will take in 3 arguments
# --- the first argument will be a number
# --- the second argument will be an operator
# --- the third argument will be a number
# this function should use a lambda to calculate your answer
# After entering your 3 arguments an answer should print to the screen
# Let's keep it to adding, subbing, divving, and multing
# HINT: YOU GET NO HINTS!!!!!
# S/N: VS CODE turns lambdas into their own function definitions.
# Follow up question
# How could we have done this differently
num_one = input("Enter a number")
operator = input("Enter an operator")
num_two = input("Enter another number")


def calculator(num_one, operator, num_two):
    if (operator == "+"):
        return add(int(num_one), int(num_two))
    elif (operator == "-"):
        return sub(int(num_one), int(num_two))
    elif (operator == "/"):
        return div(int(num_one), int(num_two))
    elif (operator == "*"):
        return mult(int(num_one), int(num_two))


def add(a, b): return a+b


def sub(a, b): return a-b


def div(a, b): return a/b


def mult(a, b): return a*b


print(calculator(num_one, operator, num_two))
