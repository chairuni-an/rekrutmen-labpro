using UnityEngine;
using System.Collections;

public class Pause : MonoBehaviour {
    public GameObject pauseScreen;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKey(KeyCode.Space))
        {
            if (Time.timeScale == 0)
            {
                Time.timeScale = 1;
                pauseScreen.SetActive(false);
            }
            else {
                pauseScreen.SetActive(true);
                Time.timeScale = 0;
            }
            System.Threading.Thread.Sleep(500);
        }
    }
}
