using UnityEngine;
using System.Collections;
using System.IO;
using System.Text;
using UnityEngine.UI;

public class MainDialog : MonoBehaviour {
    public Text textName;
    public Text textDialog;
    public TextAsset text;
    public RawImage face_Frej;
    public RawImage face_Other;
    public Animator EventCounter;
    public GameObject Canv_Battle;
    public GameObject Canv_Event;
    public bool text_Load = true;
    public char karakter;
    public string kata = "";
    public bool proc = false;
    public int incre = 0;
    public string ST;
    public float inc;

    public string si;

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
        EventCounter.SetFloat("Event_Counter", PlayerPrefs.GetFloat("EC"));
    }


    void Update() {
        kata = "";
        string face = "";

        if (text_Load && EventCounter.GetFloat("Event_Counter") % 1 == 0)//kalau ec bul
        {
            text = Resources.Load<TextAsset>("dialog/Dialog_" + EventCounter.GetFloat("Event_Counter"));
            ST = text.ToString();
            text_Load = false;
            Canv_Battle.SetActive(false);
            Canv_Event.SetActive(true);
            incre = 0;
            proc = true;
        }

        if (EventCounter.GetFloat("Event_Counter") % 1 != 0)
        {
            Canv_Battle.SetActive(true);
            Canv_Event.SetActive(false);
        }

        if (Input.GetKey(KeyCode.X) && !proc && !text_Load)
        {
            proc = true;
            System.Threading.Thread.Sleep(500);
        }
        if (proc && !text_Load)
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
                    else if (karakter == '{')//LOAD PORTRAITS
                    {
                        face = faceReader(ST);
                        if (face != "0")//PORTRAIT ENABLE
                        {
                            face_Other.gameObject.SetActive(true);
                            face_Frej.gameObject.SetActive(true);
                            if (face[0]!='Q')//Freja's portrait
                                face_Frej.texture = Resources.Load<Texture>("face/"+face);
                            else//Other char's portrait
                            {
                                face = face.Remove(0,1);
                                face_Other.texture = Resources.Load<Texture>("face/" + face);
                            }
                        }
                        else//PORTRAIT DISABLE
                        {
                            face_Other.gameObject.SetActive(false);
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

        if (ST[incre] == '<' && !text_Load)
        {
            text_Load = true;
            inc = EventCounter.GetFloat("Event_Counter");
            inc = (float) 0.5 + inc;
            EventCounter.SetFloat("Event_Counter", inc);
            Canv_Battle.SetActive(true);
            Canv_Event.SetActive(false);
            incre = 0;
            
            textName.text = "";
            textDialog.text = "";
        }
    }
}

