using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

public class SaveData : MonoBehaviour {
    public GameObject freja, monster,came;
    public Animator frejAn;
    public string a;
    void Start() { }

    void Update() {
        float distance = Vector3.Distance(transform.position, freja.transform.position);
        if (distance < 7 && Input.GetKey(KeyCode.X) && frejAn.GetFloat("Event_Counter") > 0.5)
        {
            Save();
        }

    }

    public void Save()
    {
        // if (!Directory.Exists("Saves"))
        //   Directory.CreateDirectory("Saves");
        FileStream fs = new FileStream("Saves/LoF.txt", FileMode.Create);

        StreamWriter ss = new StreamWriter(fs);

        /*FileStream file = File.Create("Saves/LoF.txt");
        file = File.Open("Saves/LoF.txt", FileMode.Create);
        file.Write();
        /*BinaryFormatter formatter = new BinaryFormatter();
        FileStream file = File.Create("Saves/LoF.binary");
            //(Application.persistentDataPath + "/LoF.dat", FileMode.Create);
        Game_Statistic gData = new Game_Statistic();
        */
        ss.WriteLine(frejAn.GetFloat("Event_Counter")+"");
        ss.WriteLine(frejAn.GetInteger("Freja_HP") + "");
        ss.WriteLine(frejAn.GetInteger("Freja_MHP") + "");
        //Save Freja's position;
        ss.WriteLine(freja.transform.position.x + "");
        ss.WriteLine(freja.transform.position.y + "");
        ss.WriteLine(freja.transform.position.z + "");
        //Save Freja's rotation
        ss.WriteLine(freja.transform.localEulerAngles.x + "");
        ss.WriteLine(freja.transform.localEulerAngles.y + "");
        ss.WriteLine(freja.transform.localEulerAngles.z + "");
        //Save monster's position
        ss.WriteLine(monster.transform.position.x + "");
        ss.WriteLine(monster.transform.position.y + "");
        ss.WriteLine(monster.transform.position.z + "");
        //Save monster's rotation
        ss.WriteLine(monster.transform.localEulerAngles.x + "");
        ss.WriteLine(monster.transform.localEulerAngles.y + "");
        ss.WriteLine(monster.transform.localEulerAngles.z + "");

        //Save camera's position
        ss.WriteLine(came.transform.position.x + "");
        ss.WriteLine(came.transform.position.y + "");
        ss.WriteLine(came.transform.position.z + "");
        //Save camera's rotation
        ss.WriteLine(came.transform.localEulerAngles.x + "");
        ss.WriteLine(came.transform.localEulerAngles.y + "");
        ss.WriteLine(came.transform.localEulerAngles.z + "");
        
        //formatter.Serialize(file, gData);*/
        ss.Close();
        fs.Close();
        a = "PL";
    }
}
