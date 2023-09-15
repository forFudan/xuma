# %%

from datetime import datetime
# version = datetime.today().strftime('%Y%m%d')
import shutil
import os
from distutils.dir_util import copy_tree
from distutils.dir_util import remove_tree

version = "20230915"

#%%
try:
    remove_tree("./dist/xuma")
except:
    pass

#%%
os.makedirs("./dist/xuma")
copy_tree("./schema", "./dist/xuma/schema")

shutil.make_archive(f"./dist/xuma_{version}", 'zip', "./dist/xuma")

try:
    remove_tree("./dist/xuma")
except:
    pass