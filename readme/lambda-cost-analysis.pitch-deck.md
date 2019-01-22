Lambda Cost Analysis
====================

The average consumer will make a certain amount of server calls while using Oven Fresh.  This section summarizes the projected cloud function cost during each visit

# Function Invocation Cost

## Nominal Usage

Function Invocation Cost: $0.20 per 1MM requests
Function Invocations per Visit (Nominal): 21

Function Invocation Cost per visit = 21 * $0.20/1MM
Function Invocation Cost per visit = $0.0000042

Total Cost = Unique visitors per month & function invocation cost per visit
Total Cost = 30M * $0.0000042
Total Cost = $126/month

## High Usage

Function Invocation Cost: $0.20 per 1MM requests
Function Invocations per Visit (Nominal): 210

Function Invocation Cost per visit = 210 * $0.20/1MM
Function Invocation Cost per visit = $0.000042

Total Cost = Unique visitors per month & function invocation cost per visit
Total Cost = 30M * $0.000042
Total Cost = $1260/month
