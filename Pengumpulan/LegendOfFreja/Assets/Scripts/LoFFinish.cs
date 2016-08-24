using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class LoFFinish : MonoBehaviour {
    public GameObject mess;
    public float startTime=0, backTime=0;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        if (PlayerPrefs.GetInt("End")==1)
        {
           
            if (startTime == 0) startTime = Time.time;
            else
            {
                if (Time.time - startTime > 1 && backTime == 0)
                {
                    mess.SetActive(true);
                    backTime = Time.time;
                }
            }

            if (backTime != 0)
            {
                if (Time.time - backTime >= 7)
                {
                    SceneManager.LoadScene("mainMenu");
                }
            }
        }
    }
}
