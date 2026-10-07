import pandas as pd
import vectorbt as vbt

# Example of testing a mean-reversion edge
price = vbt.YFData.download('BTC-USD').get('Close')
# Calculate deviation from 20-day SMA
sma = vbt.MA.run(price, 20)
deviation = (price - sma.ma) / sma.ma

# Enter long when price is 5% below SMA (Mean Reversion)
entries = deviation < -0.05
exits = deviation > 0

portfolio = vbt.Portfolio.from_signals(price, entries, exits)
print(portfolio.stats())