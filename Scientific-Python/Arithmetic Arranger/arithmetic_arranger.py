def arithmetic_arranger(problems, *args):
    if len(problems) > 5:
        return "Error: Too many problems."

    arranged_problems = []

    for problem in problems:
        # ["32", "+", "1023"]
        topNum, operator, bottomNum = problem.split()

        if operator not in "-+":
            return "Error: Operator must be '+' or '-'."

        try:
            intTop = int(topNum)
            intBot = int(bottomNum)

        except:
            return "Error: Numbers must only contain digits."

        if (intTop > 9999) or (intBot > 9999):
            return "Error: Numbers cannot be more than four digits."

        # calculate max width of problem for output and text aligning
        width = max(len(topNum), len(bottomNum)) + 2

        # format lines with f-string
        topLine = f"{topNum:>{width}}"
        bottomLine = operator + f"{bottomNum:>{width-1}}"
        dashes = "-" * width
        solution = 0

        # add formatted lines to output array, we must add segments per line instead of in its own block to follow formatting requirements
        try:
            arranged_problems[0] += " " * 4 + topLine
        except:
            arranged_problems.append(topLine)

        try:
            arranged_problems[1] += " " * 4 + bottomLine
        except:
            arranged_problems.append(bottomLine)

        try:
            arranged_problems[2] += " " * 4 + dashes
        except:
            arranged_problems.append(dashes)

        # when True is passed, also generate and add solution to output
        if args:
            if operator == "+":
                solution = intTop + intBot
            else:
                solution = intTop - intBot

            answers = f"{solution:>{width}}"

            try:
                arranged_problems[3] += " " * 4 + answers
            except:
                arranged_problems.append(answers)

    if args:
        return f"{arranged_problems[0]}\n{arranged_problems[1]}\n{arranged_problems[2]}\n{arranged_problems[3]}"
    else:
        return f"{arranged_problems[0]}\n{arranged_problems[1]}\n{arranged_problems[2]}"
