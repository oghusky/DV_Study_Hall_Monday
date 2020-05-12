# Linear Regression Notes and Definitions:

*linear regression =* In statistics, linear regression is a linear approach to modeling 
		the relationship between a scalar response (or dependent variable) and 
		one or more explanatory variables (or independent variables).

*independent variable (x-axis) =* value does not change by the effect of other values

*dependent variable (y-axis) =* value does change depending on other values

*weighted coefficient =* correlation between x and y. The closer the weight is to zero the less the correlation. A correlation close to 1 is positive correlation. A correlation close to -1 is a negative correlation. 

*scale =* change the range of the values. The shape of the distribution doesn’t change. Think about how a scale model of a building has the same proportions as the original, just smaller. That’s why we say it is drawn to scale. The range is often set at 0 to 1.

*standardize =* changing the values so that the distribution standard deviation from the mean equals one. It outputs something very close to a normal distribution. Scaling is often implied.

*r2 score =* varies between 0 and 100%. A low value shows a low level of correlation 

*mean square error(MSE) =* is the average of the square of the errors. A low value shows a low level of errors.

## Types of Values:

*numerical =* value types are numbers ie: age, salary, height, weight

*categorical =* value types are descriptions ie: gender, race, state, color

## Types of Machine Learning Algorithms

*supervised =* input data to train model in a way the model can predict future outputs
*unsupervised =* the model is trained with unlabeled data
*reinforcement =* giving the model reinforcement (a reward) for performing properly in the environment

# Types of Supervised Regression

*simple linear regression=* diagram is two variables showing a straight line
*multiple linear regression=* diagram is multiple variables with multiple straight lines
*polynomial linear regression=* diagram can have a curved line drawn through it
*residuals=* or errors. distance between actual points and predicted line. The closer the summation(sigma) of these distances is to zero the better

# Understanding Linear Regression

<dd>Find variables that are good predictors of the outcome variables</dd>
<dd>Does linear regression  diagram perform as expected</dd>

# Linear Regression formulas
*y = m * x + c*
*y =* y coordinate on graph
*m =* slope of line calculated by using the equation:
```(y2-y1)/(x2-x1)```
or
```((total number of rows * sigma(x * y)) - (sigma(x)*sigma(y)))/((total number of rows * (x^2)) - (y^2))```
*x =* given x coordinate on graph
*c =* where graph crosses y-axis
equation for c:
```((sigma(y) * sigma(x^2)) - (sigma(x) * sigma(x * y)))/((total number of rows * sigma(x^2)) - (sigma(x * y)^2))```
*sigma =* sum of the veritcal values



