"""
Aspect Based Sentiment Analysis 
using Spacy and NLTK together
"""
import re
import spacy
from textblob import TextBlob

try:
    nlp = spacy.load("en_core_web_sm")
except: # pylint: disable=W0702  # Ignore exception type
    spacy.cli.download("en_core_web_sm")
    nlp = spacy.load("en_core_web_sm")

def preprocess(text):
    """
    _summary_

    Args:
        text (_type_): _description_

    Returns:
        _type_: _description_
    """
    pattern = r'\n|((?<!\w)(?:and|or|but)(?!\w))|\.|\,|\!'
    sentences = re.split(pattern, text)
    sentences = [s.strip() for s in sentences if s and len(s.strip())>1]
    temp = []
    append_check = None
    for s in sentences:
        if s in {'and', 'or', 'but'}:
            append_check = s
        else:
            if append_check:
                if ' ' in s:
                    temp.append(s)
                else:
                    temp[-1] += f' {append_check} ' + s
                append_check = None
            else:
                temp.append(s)
    return temp

def extract_aspect(sentences):
    """
    _summary_

    Args:
        sentences (_type_): _description_

    Returns:
        _type_: _description_
    """
    aspects = []
    for sentence in sentences:
        doc = nlp(sentence)
        descriptive_term = []
        target = ''
        for token in doc:
            if token.dep_ == 'nsubj' and token.pos_ == 'NOUN':
                target = token.text
            if token.pos_ == 'ADJ':
                prepend = ''
                for child in token.children:
                    if child.pos_ != 'ADV':
                        continue
                    prepend += child.text + ' '
                descriptive_term.append(prepend + token.text)
        if descriptive_term:
            for dterm in descriptive_term:
                if not target:
                    target = 'general'
                aspects.append({'aspect': target,'description': dterm})
    return aspects

def sentiment_scoring(aspects):
    """
    _summary_

    Args:
        aspects (_type_): _description_

    Returns:
        _type_: _description_
    """
    for aspect in aspects:
        aspect['sentiment'] = TextBlob(aspect['description']).sentiment
    return aspects

def absa(review):
    """
    Perform full absa 

    Args:
        review (_type_): one single review
    """
    tokens = preprocess(review)
    aspect_senti = extract_aspect(tokens)
    return sentiment_scoring(aspect_senti)
