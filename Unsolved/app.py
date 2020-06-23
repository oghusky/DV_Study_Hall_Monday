import random

print("Let's Play Rock Paper Scissors")

options = ["r", "p", "s"]

computer_choice = random.choice(options)
user_choice = input("Make your choice: (r)ock, (p)aper, (s)cissors? ")
# if (user_choice == "r" and computer_choice == "p"):
#     print("You chose rock and the computer chose paper. Sorry You lose")
# elif (user_choice == "p" and computer_choice == "s"):
#     print("You chose paper and the computer chose scissors. Sorry You lose")
# elif (user_choice == "s" and computer_choice == "r"):
#     print("You chose scissors and the computer chose rock. Sorry You lose")
# elif (user_choice == "r" and computer_choice == "s"):
#     print("You chose rock and the computer chose scissors. You win!")
# elif (user_choice == "p" and computer_choice == "r"):
#     print("You chose paper and the computer chose rock. You win!")
# elif (user_choice == "s" and computer_choice == "p"):
#     print("You chose scissors and the computer chose paper. You win!")
# elif (user_choice == 'r' and computer_choice == 'r'):
#     print("You both chose rock. It's a tie")
# elif (user_choice == 's' and computer_choice == 's'):
#     print("You both chose scissors. It's a tie")
# elif (user_choice == 'p' and computer_choice == 'p'):
#     print("You both chose paper. It's a tie")
# else:
#     print("Please enter 'r', 'p', or 's'!")

# Refactor
if (user_choice == 'r' and computer_choice == 's'
    or user_choice == 'p' and computer_choice == 'r'
        or user_choice == 's' and computer_choice == 'p'):
    print(
        f"You chose {user_choice} and the computer chose {computer_choice}. You win!")
elif (user_choice == 'r' and computer_choice == 'p'
      or user_choice == 's' and computer_choice == 'r'
      or user_choice == 'p' and computer_choice == 's'):
    print(
        f"You chose {user_choice} and the computer chose {computer_choice}. You Lose!")
elif (user_choice == computer_choice):
    print(f"It's a tie, You both chose {user_choice}")
else:
    print("I dont understand. Please type r, p or ,s!!")
