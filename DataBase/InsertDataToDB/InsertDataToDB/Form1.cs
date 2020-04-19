using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace InsertDataToDB
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            SqlConnection connection = new SqlConnection("Data Source=DESKTOP-PC6EBE2;Initial Catalog=User;Integrated Security=True");
            connection.Open();
            SqlCommand command = new SqlCommand("insert into UserTable(Email, Password) values(@Email,@Password)", connection);
            command.Parameters.Add("@email", SqlDbType.NVarChar).Value = textBox1.Text;
            command.Parameters.Add("@password", SqlDbType.NVarChar).Value = textBox2.Text;
            if (command.ExecuteNonQuery() == 1)
                MessageBox.Show("User has been added");
            else
                MessageBox.Show("User has not been added");
            connection.Close();
        }
        public static void main(string[] args)
        {
            Application.Run(new Form1());
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
