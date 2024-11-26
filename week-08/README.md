# MHL-Datensonifikation-Week-08-boiler
***Functions, V60 Coffee Brew Data, JupyterLab, MIDI***

## Steps to Use JupyterLab in a Virtual Environment 

### 1. Download this Repository

Download the `.zip` folder, or clone this repository.

Open a Terminal window and run: 

```
cd /drag/and/drop/path/to/this/repository
```

### 2. Create a Virtual Environment.

Now that your Terminal is pointing to the correct folder, run: 

```
python3 -m venv myenv
```

This creates an isolated Python environment in a folder named `myenv`, which is separate from the Python version you installed on your computer. 

### 3. Activate the Virtual Environment

On macOS/Linux:

```
source myenv/bin/activate
```

On Windows:
```
myenv\Scripts\activate
```

### 4. Install JupyterLab in the Virtual Environment  

Once the environment is active (you'll see (myenv) in the terminal prompt), run:

```
pip install jupyterlab
```

### 5. Install Additional Python Libraries

```
pip install pandas numpy
```

### 6. Run JupyterLab

While still in the virtual environment, launch JupyterLab:

```
jupyter lab
```

This will start JupyterLab in a browser window. 
It looks kind of funny, but it's running a VS Code-like environment on a **local server**. 
Inside this **local server**, you can open **Jupyter Notebooks (.ipynb files)**.
Read, edit, run, save, and export your work as you would in VS Code.

### 7. Deactivate the Virtual Environment   

control+Z first to stop serving virtual env to web browser

After you finish using JupyterLab, save your work in JupyterLab.
Then deactivate the virtual environment in Terminal:

```
deactivate
```

And that's it! 
