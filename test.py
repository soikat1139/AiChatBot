# import bardapi
# import os

# # set your __Secure-1PSID value to key
# token = 'xxxxxxxxxx'

# # set your input text
# input_text = ""

# # Send an API request and get a response.
# response = bardapi.core.Bard(token).get_answer(input_text)
# print(response)

from bardapi import Bard

token = 'Vgg4iSfZO1XYe_GWcAD8j7ZuCpGNm2_7YbnS8WFSh7M_ADWLf4mgpjCV2UTOLkt0XQ_BLw.'
bard = Bard(token=token)
response=bard.get_answer('What is 2+2 .I want the response to be in JSON response like this:````` {"Answer":4}```` ')['content']

print(response)
print(type(response))