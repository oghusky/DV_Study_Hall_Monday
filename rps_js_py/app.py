import random

print("Let's Play Rock Paper Scissors")

options = ["r", "p", "s"]

computer_choice = random.choice(options)

user_choice = input("Make your choice: (r)ock, (p)aper, (s)cissors")
# if (user_choice == 'r' and computer_choice == 'p'):
#     print(
#         f'You chose {user_choice} and the computer chose {computer_choice}. Sorry you lose')
# elif (user_choice == 'p' and computer_choice == 's'):
#     print(
#         f'You chose {user_choice} and the computer chose {computer_choice}. Sorry you lose')
# elif (user_choice == 's' and computer_choice == 'r'):
#     print(
#         f'You chose {user_choice} and the computer chose {computer_choice}. Sorry you lose')
# elif (user_choice == 'r' and computer_choice == 's'):
#     print(
#         f'You chose {user_choice} and the computer chose {computer_choice}. You win!!!')
# elif (user_choice == 's' and computer_choice == 'p'):
#     print(
#         f'You chose {user_choice} and the computer chose {computer_choice}. You win!!!')
# elif (user_choice == 'p' and computer_choice == 'r'):
#     print(
#         f'You chose {user_choice} and the computer chose {computer_choice}. You win!!!')
# elif (user_choice == 'p' and computer_choice == 'p'):
#     print(
#         f"You chose {user_choice} and the computer chose {computer_choice}. It's tie.")
# elif (user_choice == 's' and computer_choice == 's'):
#     print(
#         f"You chose {user_choice} and the computer chose {computer_choice}. It's tie.")
# elif (user_choice == 'r' and computer_choice == 'r'):
#     print(
#         f"You chose {user_choice} and the computer chose {computer_choice}. It's tie.")
# else:
#     print("Please enter 'p', 'r', 's'")

if (user_choice == 'r' and computer_choice == 's'
    or user_choice == 'p' and computer_choice == 'r'
        or user_choice == 's' and computer_choice == 'p'):
    print(
        f'You chose {user_choice} and the computer chose {computer_choice}. You win!!!')
elif (user_choice == 'r' and computer_choice == 'p'
      or user_choice == 'p' and computer_choice == 's'
      or user_choice == 's' and computer_choice == 'r'):
    print(
        f'You chose {user_choice} and the computer chose {computer_choice}. Sorry you lose')
elif (user_choice == computer_choice):
    print(
        f"You chose {user_choice} and the computer chose {computer_choice}. It's tie.")
else:
    print("Please enter 'p', 'r', 's'")
