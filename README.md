<img width="200" alt="image" src="https://github.com/hi1van/spotthatplane/blob/main/public/logo.png">

# Spot that Plane
Your personal plane-spotting assistant.

## Links:
Live website: https://hi1van.github.io/spotthatplane \
Gradio app hosted on Hugging Face: https://huggingface.co/spaces/ivanczhuang/SpotThatPlane \
Kaggle Jupyter Notebook on model training: https://www.kaggle.com/code/ivanczhuang/spotthatplane \
GitHub repo for the Gradio app powered the model: https://github.com/hi1van/SpotThatPlaneGradio

## Project Background
Combining two interests of mine, deep learning models and plane-spotting, Spot that Plane is 
an assistant of sorts, helping you classify a model of aircraft you may be unsure about out of a given selection.

Harnessing PyTorch and fast.ai, a deep learning model was trained on a data set of almost 3000 
images of aircraft in the selection. After training, an error-rate of ~11% was achieved, accurate
enough for the purposes of this website and my experiment.

You can view the process of training the model and some insights in the Kaggle link.

## Tools
- **Frontend**: React, Bulma
- **Backend**: Gradio app hosted on Hugging Face
- **Hosting**: GitHub Pages (for frontend), Hugging Face Spaces (for backend)
- **Model Training**: PyTorch, fast.ai
- **UI/UX Design**: Figma
- **Other**: Hugging Face @gradio/client for API calls, Kaggle for model training and insights
