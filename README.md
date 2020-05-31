# Laundrify
Employee Self-Service Portal for Laundromats.

### Install
The client-side programming language is `JavaScript`. 

The server-side programming languages are `PHP` and `SQL`, which are packaged in `XAMPP`.

**Step One**: go to https://www.phpmyadmin.net/
                                            
a.Click on "Support" Tab on top of page

b. Under the header "Read the documentation!" click on "the documentation"
    
c. Click on "Installing on Windows"
        
d. Click on XAMPP
            
e. Install on C Drive.
                                            

**Step Two**: After installing XAMPP go to the following directory in the C Drive:

 xampp > htdocs

... next, create the folder containing the `pickupdropoff.html` and `insert.php` files.


**Step Three**: Launch XAMPP and choose `Apache` and `MySQL` to Start.


**Step Four**: Open a browser, type in "localhost," which will direct you to the XAMPP Apache dashboard. Select phpMyAdmin.

**Step Five** Go to https://cdn.datatables.net/ to download the DataTables CDN.

Also, go to https://getbootstrap.com/docs/4.5/getting-started/introduction/ for the Bootstrap CDN.

Finally, go to https://jquery.com/download/ for the jQuery file.

### Code

### Run
If you do not wish to install XAMPP to store the form data on your hard drive, you may opt for `demo.html` instead, which
stores customer data in **Local Storage** > **file://** of the console's **Application** Tab. Another neat feature of this
is the console log sends a warning that a new customer object was added; this is just another way to test if the script
executed properly.

The pages `fetch.html` and `pickupdropoff.html` are only accessible through local hosting via `Apache` and `MySQL`.

### Data
The form data is stored a `SQL` database, which will be in your hard drive.

**Step One**: we create our database in `phpMyAdmin` and call it **customers**.

**Step Two**: we create a table with 6 columns called **information** in the database **customers**.

*Note*: the column called **id** is checked for A.I (Auto Increment).

**Step Three**: we submit a form, and see in our `SQL` table that a new customer was added
to the **information** table inside the **customers** database.
