using UnityEngine;
using System.Collections;
using System.IO;
using System.Text;
using UnityEngine.UI;

public class Dialog : MonoBehaviour {
    public Text textName;
    public Text textDialog;
    public TextAsset text;
    public RawImage face_Frej;
    public char karakter;
    public string kata = "";
    public bool proc = true;
    public int incre = 0;
    public string ST;

    public string nameReader(string read)
    {
        char charN;
        string name = "";
        incre++;
        do
        {
            charN = read[incre];
            if (charN != ']')
            {
                name += charN;
                incre++;
            }
        } while (charN != ']');
        return name;
    }

    public string faceReader(string read)
    {
        char charF;
        string face = "";
        incre++;
        do
        {
            charF = read[incre];
            if (charF != '}')
            {
                face += charF;
                incre++;
            }
        } while (charF != '}');
        return face;
    }

    // Use this for initialization
    void Start() {
        textName.text = "";
        textDialog.text = "";
        ST = text.ToString();
        incre = 0;
        proc = true;
    }


    void Update() {
        kata = "";
        string face = "";
        if (Input.GetKey(KeyCode.X) && proc == false)
        {
            proc = true;
            System.Threading.Thread.Sleep(500);
        }
        if (proc==true)
        {
            do
            {
                karakter = ST[incre];
                if (karakter != '<' && (int)karakter != 10 && (int)karakter!=13)
                {
                    if (karakter == '[')
                    {
                        textName.text = nameReader(ST);
                    }
                    else if (karakter == '{')
                    {
                        face = faceReader(ST);
                        if (face != "0")
                        {
                            face_Frej.gameObject.SetActive(true);
                            face_Frej.texture = Resources.Load<Texture>("face/"+face);
						}else{
                            face_Frej.gameObject.SetActive(false);
						}
                    }
                    else if (karakter == '>')
                    {
                        textDialog.text = kata;
                    }
                    else kata += karakter;
                }
                incre++;
            } while (karakter != '>');
            proc = false;
        }
		if (ST [incre] == '<') {
			Application.LoadLevel("scenetre");
		}

    }
}

