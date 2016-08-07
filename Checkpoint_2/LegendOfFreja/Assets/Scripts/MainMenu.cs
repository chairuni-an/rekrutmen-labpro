using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;
using System.Text;
using UnityEngine.UI;

public class MainMenu : MonoBehaviour {
    public Text text;
	// Use this for initialization
	public void StartGame()
    {
        PlayerPrefs.SetInt("freja_HP", 200);
        PlayerPrefs.SetInt("freja_MHP", 200);
        PlayerPrefs.SetFloat("EC", 0);
        PlayerPrefs.SetInt("Beginner", 1);
        SceneManager.LoadScene("openingDiag");
    }

    public void Load()
    {
        if (Directory.Exists(("Saves")))
        {
            text.text = ""+File.Exists("Saves/LoF.txt");
            //BinaryFormatter bf = new BinaryFormatter();
            TextReader file = File.OpenText("Saves/LoF.txt");
            //Game_Statistic newData = (Game_Statistic) bf.Deserialize(file);
            PlayerPrefs.SetInt("Beginner", 0);

            //ss.WriteLine(frejAn.GetFloat("Event_Counter") + "");
            //float x = float.Parse(file.ReadLine());
            PlayerPrefs.SetFloat("EC", float.Parse(file.ReadLine()));

            //ss.WriteLine(frejAn.GetInteger("Freja_HP") + "");
            PlayerPrefs.SetInt("freja_HP", int.Parse(file.ReadLine()));

            //ss.WriteLine(frejAn.GetInteger("Freja_MHP") + "");
            PlayerPrefs.SetInt("freja_MHP", int.Parse(file.ReadLine()));
            
            //Save Freja's position;
            //ss.WriteLine(freja.transform.position.x + "");
            PlayerPrefs.SetFloat("freja_posX", float.Parse(file.ReadLine()));

            //ss.WriteLine(freja.transform.position.y + "");
            PlayerPrefs.SetFloat("freja_posY", float.Parse(file.ReadLine()));

            //ss.WriteLine(freja.transform.position.z + "");
            PlayerPrefs.SetFloat("freja_posZ", float.Parse(file.ReadLine()));
            
            //Save Freja's rotation
            //ss.WriteLine(freja.transform.localEulerAngles.x + "");
            PlayerPrefs.SetFloat("freja_rotX", float.Parse(file.ReadLine()));

            //ss.WriteLine(freja.transform.localEulerAngles.y + "");
            PlayerPrefs.SetFloat("freja_rotY", float.Parse(file.ReadLine()));

            //ss.WriteLine(freja.transform.localEulerAngles.z + "");
            PlayerPrefs.SetFloat("freja_rotZ", float.Parse(file.ReadLine()));

            //Save monster's position
            //ss.WriteLine(monster.transform.position.x + "");
            PlayerPrefs.SetFloat("mons_posX", float.Parse(file.ReadLine()));
            //ss.WriteLine(monster.transform.position.y + "");
            PlayerPrefs.SetFloat("mons_posY", float.Parse(file.ReadLine()));
            //ss.WriteLine(monster.transform.position.z + "");
            PlayerPrefs.SetFloat("mons_posZ", float.Parse(file.ReadLine()));
            
            //Save monster's rotation
            //ss.WriteLine(monster.transform.localEulerAngles.x + "");
            PlayerPrefs.SetFloat("mons_rotX", float.Parse(file.ReadLine()));
            //ss.WriteLine(monster.transform.localEulerAngles.y + "");
            PlayerPrefs.SetFloat("mons_rotY", float.Parse(file.ReadLine()));
            //ss.WriteLine(monster.transform.localEulerAngles.z + "");
            PlayerPrefs.SetFloat("mons_rotZ", float.Parse(file.ReadLine()));

            //Save camera's position
            //ss.WriteLine(came.transform.position.x + "");
            PlayerPrefs.SetFloat("came_posX", float.Parse(file.ReadLine()));
            //ss.WriteLine(came.transform.position.y + "");
            PlayerPrefs.SetFloat("came_posY", float.Parse(file.ReadLine()));
            //ss.WriteLine(came.transform.position.z + "");
            PlayerPrefs.SetFloat("came_posZ", float.Parse(file.ReadLine()));
            
            //Save camera's rotation
            //ss.WriteLine(came.transform.localEulerAngles.x + "");
            PlayerPrefs.SetFloat("came_rotX", float.Parse(file.ReadLine()));
            //ss.WriteLine(came.transform.localEulerAngles.y + "");
            PlayerPrefs.SetFloat("came_rotY", float.Parse(file.ReadLine()));
            //ss.WriteLine(came.transform.localEulerAngles.z + "");
            PlayerPrefs.SetFloat("came_rotZ", float.Parse(file.ReadLine()));
            
            //float x = float.Parse(file.ReadLine());
            //int y = int.Parse(file.ReadLine());
            file.Close();
            SceneManager.LoadScene("scenetre");
        }
    }

    public void Gallery()
    {
        SceneManager.LoadScene("gallerySce");
    }
}


