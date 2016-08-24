using UnityEngine;
using System.Collections;
using System.Text;
using UnityEngine.UI;

public class BirdieHelp : MonoBehaviour {
    public GameObject birdie_HUI;
    public Text help_Mess;
    public Animator freja;
    public bool mess_Appear;
    public float startTime;


    void ShowMessege(string messege)
    {
        birdie_HUI.SetActive(true);
        startTime = Time.time;
        help_Mess.text = messege;
        mess_Appear = false;
    }
    // Use this for initialization
	void Start () {
        mess_Appear = true;
        birdie_HUI.SetActive(false);
	}
	
	// Update is called once per frame
	void Update () {
        float ec = freja.GetFloat("Event_Counter");
        if (ec % 1 == 0)
        {
            birdie_HUI.SetActive(false);
            mess_Appear = true;
        }
        else
        {
            if (mess_Appear)
            {
                if (ec == 0.5)//Ira
                {
                    ShowMessege("First, you have to find the orange stone, missy!");
                }
                if (ec == 1.5)//Luxuria
                {
                    ShowMessege("Now, find the red stone!");
                }
                if (ec == 2.5)//Invidia
                {
                    ShowMessege("Make your way to light blue stone! Chop, chop");
                }
                if (ec == 3.5)//Acedia
                {
                    ShowMessege("Yellow! You got it, missy?");
                }
                if (ec == 4.5)//Avaritia
                {
                    ShowMessege("C'mon, missy, to the deep blue one! ");
                }
                if (ec == 5.5)//Gula
                {
                    ShowMessege("Where the green stone is? I know it but I won't tell you!");
                }
                if (ec == 6.5)//Superbia
                {
                    ShowMessege("Well, at last... Just hang in there, missy. Now, find the purple stone!");
                }
            }
            else
            {
                if (Time.time-startTime >=5) birdie_HUI.SetActive(false);
            }
        }
	
	}
}
