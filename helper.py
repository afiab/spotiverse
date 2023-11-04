# helper functions so that i dont have to type out a bunch of html/css/js

def navlist(filename, element):
    return "<li class=\"navlist\"><a href=\""+filename+".html\">"+element+"</a></li>"

def main():
    navElems = ["Home","Diversity Score","Discover","Settings"];
    for elem in navElems:
        print(navlist(elem.split(" ")[0].lower(),elem));

if __name__ == "__main__":
    main();