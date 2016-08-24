using UnityEngine;
using System.Collections;
using System.IO;
public class GalleOnLoad : MonoBehaviour {
    public bool sfs;
    public float ec;
	// Use this for initialization
	void Start () {
        sfs = Directory.Exists(("Saves"));
        if (Directory.Exists(("Saves")))
        {
            TextReader file = File.OpenText("Saves/LoF.txt");
            PlayerPrefs.SetFloat("ECG", float.Parse(file.ReadLine()));
            file.Close();
        }else PlayerPrefs.SetFloat("ECG",0);
        ec = PlayerPrefs.GetFloat("ECG");
    }
}
