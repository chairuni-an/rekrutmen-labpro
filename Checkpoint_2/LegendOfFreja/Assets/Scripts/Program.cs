using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace ConsoleApplication1
{
    class Program
    {
        public string nameReader(StreamReader read)
        {
            char charN;
            string name ="";

            do
            {
                charN = (char)read.Read();
                if (charN != ']') name += charN;
            } while (charN != ']');
           
            return name;
        }
        public string faceReader(StreamReader read)
        {
            char charF;
            string face = "";
            do
            {
                charF = (char)read.Read();
                if (charF != '}') face += charF;
            } while (charF != '}');
            return face;
        }

        static void Main(string[] args)
        {
            char karakter;
            string kata = "";
            Program prog = new Program();

            StreamReader reader = new StreamReader("C:\\Users\\SASHINOVITASARI\\Desktop\\try.txt");
            do
            {
                karakter = (char) reader.Read();
                if (karakter != '<' && (int)karakter != 13 && (int) karakter != 10)
                {
                    if (karakter == '[')
                    {
                        Console.WriteLine("Name: " + prog.nameReader(reader) + "    PPP");
                    }
                    else if (karakter == '{')
                    {
                        Console.WriteLine("Face: " + prog.faceReader(reader));
                    }
                    else if (karakter == '>')
                    {
                        Console.WriteLine("Dialog: " +kata + "   JJJ");
                        kata = "";

                    }
                    else kata += karakter;
                }
            } while (karakter != '<');
            Console.Read();
        }
    }
}
