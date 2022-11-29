# ooni-challenge

Hi Ross and OONI team,

So here's where I got to with the challenge. I had a lot of fun with it and will definitely carry it on. It was a wild ride as this was my first intense deep dive into some typescript syntax.

What I came up with was a small UI becuase for me it just felt better to visually represent what was happening.

It's a work in progress and I'm going to keep going for a bit of fun but in short here's where I'm at..

- I set up a DB for the product data and was able to conditionally render UI buttons based on this so if new products were added the UI would update automatically.

- I have used State in this project draft to store order details and realised it would be better to add ordered items as objects as I found that I couldn't select more than one pizza or both the sides!

- It was easy to pull the data for it being Tuesday or not but because of the previous bug I didn't get to the stage of calculating the discount on checkout.

- I also realised another limitation of storing the orders in state the way I am doing is that if new products are added there are no definitions to include them in the orders even though the buttons will be rendering.

- I really wanted to submit something to blow you all away but time went over.

I hope what I've done gives a good impresion, thank you for the fun task, I'll definitely be finishing this one!!
