import copy
import random

# Consider using the modules imported above.


class Hat:
    def __init__(self, **kwargs) -> None:
        self.contents = []

        for key, value in kwargs.items():
            for i in range(value):
                self.contents.append(key)

        self.contents_copy = self.contents.copy()

        print(self.contents)
        print(self.contents_copy)

    def draw(self, num):
        if num >= len(self.contents_copy):
            self.contents_copy
            return self.contents

        balls_drawn = []

        for i in range(num):
            rand_choice = random.choice(self.contents)
            balls_drawn.append(rand_choice)
            self.contents_copy.remove(rand_choice)

        return balls_drawn


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    # actual blue 3 red 2 green 6
    # expected_balls {blue: 2, green: 1}

    count = 0

    for i in range(num_experiments):
        balls_drawn = hat.draw(num_balls_drawn)

        for color in expected_balls.keys():
            if balls_drawn.count(color) < expected_balls[color]:
                break
            elif color == list(expected_balls)[-1]:
                count += 1

    return count / num_experiments
