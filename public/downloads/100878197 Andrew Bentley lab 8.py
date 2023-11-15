from tkinter import *


class BMI_Calculator:
    def __init__(self, Height=5, Weight=0):
        self.Height = Height
        self.Weight = Weight
        self.bmi_value = 0

    def calculate_bmi_number(self):
        self.bmi_value = (self.Weight / (self.Height ** 2))
        return self.bmi_value

    def get_bmi_status_description(self):
        bmi_value = self.calculate_bmi_number()
        if bmi_value < 18.5:
            return ("you are underweight and your BMI is : {:.2f}".format(bmi_value))
        elif 18.5 <= bmi_value < 24.9:
            return ("you are healthy and your BMI is : {:.2f}".format(bmi_value))
        else:
            return ("you are overweight and your BMI is : {:.2f}".format(bmi_value))


class GUI:
    def __init__(self):
        self.window = Tk()
        self.window.title("BMI Calculator")

        frame1 = Frame(self.window)
        frame1.pack()
        label1 = Label(frame1, text="Enter your height (in meters): ")
        self.Height = DoubleVar()
        entryHeight = Entry(frame1, textvariable=self.Height)
        label2 = Label(frame1, text="Enter your weight (in kg): ")
        self.Weight = DoubleVar()
        entryWeight = Entry(frame1, textvariable=self.Weight)
        btGetHeight = Button(frame1, text="Calculate", command=self.processButton)
        label1.pack()
        entryHeight.pack()
        label2.pack()
        entryWeight.pack()
        btGetHeight.pack()
        self.window.mainloop()

    def processButton(self):
        n = BMI_Calculator(self.Height.get(), self.Weight.get())
        returns = Label(self.window, text=n.get_bmi_status_description())
        returns.pack()

GUI()
