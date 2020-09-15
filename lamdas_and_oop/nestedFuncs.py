# define a function in simple words
# what are functions used for
# what is the difference between a parameter and an argument
# how many times can you use a function in a program
# what is the difference between print() and return

# ==================CHALLENGE
# Write a function that on "run" asks you for input on a language
# That language can either be Javascript or Python
# if the user enters one answer it runs another function
# else if they answer another way it run a different function
# if they dont answer correctly if gives them an error and runs the first function again
# ======================
# inside these two nested functions prompt the user to answer which job title do they want to take with that language
# give them two choices for each possibility
# if they enter one answer print them out a sentence saying something similar to
# ---- "You should learn <this> and <this> to be a <job title> using <original input from original function>"
# else if they don't enter one of the chosen options print out their error and run the program from the beginning
# without having to stop it and press the "run" button again


def langKnown():
    chosen_lang = input("What language are you learning? ")
    if (chosen_lang == "Python"):
        data_sci(chosen_lang)
    elif (chosen_lang == "JS"):
        web_dev(chosen_lang)
    else:
        print("Choose Python or JS")
        langKnown()


def data_sci(lang):
    choose_path = input("Which path? Data Scientist or Data Analyst? ")
    if (choose_path == "Data Scientist"):
        print(
            f"You should learn SciKit Learn with {lang} to be a {choose_path}")
    elif (choose_path == "Data Analyst"):
        print(
            f"You should learn Pandas and MatPlotLib with {lang} to be a {choose_path}")
    else:
        print(
            f"Choose either Data Scientist or Data Analyst I'm not sure what {choose_path} is.")
        langKnown()


def web_dev(lang):
    choose_path = input("Which path? Front End or Back End? ")
    if (choose_path == "Front End"):
        print(
            f"You should learn HTML CSS and React with {lang} to be a {choose_path} developer.")
    elif (choose_path == "Back End"):
        print(
            f"You should learn C#, Java, or NodeJS with {lang} to be a {choose_path} developer")
    else:
        print(
            f"Choose either Front End or Back End I'm not sure what {choose_path} is.")
    langKnown()


langKnown()
