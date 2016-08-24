using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
public class LoFOver : MonoBehaviour {
    public Animator Freja;
    public GameObject Display;
    public float startTime=0;
    public float backTime = 0;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	    if (Freja.GetInteger("Freja_Dead") == 1)
        {
            if (startTime == 0) startTime = Time.time;
            else
            {
                if (Time.time-startTime > 1 && backTime==0)
                {
                    Display.SetActive(true);
                    backTime = Time.time;
                }
            }

            if (backTime != 0)
            {
                if (Time.time - backTime >= 5)
                {
                    SceneManager.LoadScene("mainMenu");
                }
            }
        }

	}
}
