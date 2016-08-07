using UnityEngine;
using System.Collections;

public class Enemy_Movement : MonoBehaviour {
    public Transform freja;
    public Animator anim;
    public Animator frj;
    public float distance;
    public GameObject statDisplay;
    
    // Use this for initialization
    void Start () {
        if (PlayerPrefs.GetInt("Beginner") == 0)
        {
            transform.position = new Vector3(PlayerPrefs.GetFloat("mons_posX"), PlayerPrefs.GetFloat("mons_posY"), PlayerPrefs.GetFloat("mons_posZ"));
            transform.localEulerAngles = new Vector3(PlayerPrefs.GetFloat("mons_rotX"), PlayerPrefs.GetFloat("came_rotY"), PlayerPrefs.GetFloat("came_rotZ"));
        }
        statDisplay.SetActive(false);
    }
	
	// Update is called once per frame
	void Update () {
        if (anim.enabled == true)
        {
            distance = Vector3.Distance(transform.position, freja.position);
            if (distance <= 15)
            {
                statDisplay.SetActive(true);
            }
            else
            {
                statDisplay.SetActive(false);
            }
            anim.SetFloat("Enem_Attack", distance);
        }
    }
}
