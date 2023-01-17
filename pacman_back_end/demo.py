# -*- coding: utf-8 -*-
"""
Created on Mon Dec 12 09:55:12 2022

@author: yyren
"""

import sys, json
import pyautogui as pg
import time
import re

def main():
    data = str(sys.argv[1])
    check = str(sys.argv[2])
    rule_ = 'name=(.*)'
    if data == "help":
        print("use 'wasd' to control direction, \r")
        print("use 'e' to use block change skill, \r")
        print("skill has 10s cooling time, \r")
        print("use 'c' to end game if get bug, \r")
        print("press 'name=(yourname)' to enter name. \r")
    if data == "w":
        pg.typewrite(['up'], 0.25)
        print("up")
    if data == "a":
        pg.typewrite(['left'], 0.25)
        print("left")
    if data == "s":
        pg.typewrite(['down'], 0.25)
        print("down")
    if data == "d":
        pg.typewrite(['right'], 0.25)
        print("right")
    if (data == "e" and check != "0"):
        print("skill can be used after "+check+" seconds")
    if (data == "e" and check == "0"):        
        pg.typewrite(['e'], 0.25)
        print("skill using")
    if data == "c":
        pg.typewrite(['c'], 0.25)
        print("restart")
    if (re.findall(rule_, data)):
        data=re.findall(rule_, data)[0]
        pg.typewrite(data, 0.1)
        pg.typewrite("\n", 0.1)
    return 0
    
if __name__ == '__main__':
    main()
