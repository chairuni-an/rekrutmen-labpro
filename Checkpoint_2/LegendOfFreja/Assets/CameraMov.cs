using UnityEngine;
using System.Collections;

public class CameraMov : MonoBehaviour {
    public GameObject player;
    public Transform target;
    public Vector3 offset;
    public Animator anim;
	// Use this for initialization
	void Start () {
       if (PlayerPrefs.GetInt("Beginner") == 0)
        {
            transform.position = new Vector3(PlayerPrefs.GetFloat("came_posX"), PlayerPrefs.GetFloat("came_posY"), PlayerPrefs.GetFloat("came_posZ"));
            transform.localEulerAngles = new Vector3(PlayerPrefs.GetFloat("came_rotX"), PlayerPrefs.GetFloat("came_rotY"), PlayerPrefs.GetFloat("came_rotX"));
            target.position = new Vector3(PlayerPrefs.GetFloat("freja_posX"), PlayerPrefs.GetFloat("freja_posY"), PlayerPrefs.GetFloat("freja_posZ"));
            target.localEulerAngles = new Vector3(PlayerPrefs.GetFloat("freja_rotX"), PlayerPrefs.GetFloat("freja_rotY"), PlayerPrefs.GetFloat("freja_rotX"));
        }
        offset = transform.position - player.transform.position;
    }
	
	/// Update is called once per frame
	void Update () {
        //Move foward/backward
        if ((Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.S)) && anim.GetInteger("Freja_Dead") != 1) { 
            transform.position = player.transform.position + offset;
        }

        //Rotate
        if (Input.GetKey(KeyCode.D) && Input.GetKey(KeyCode.K)){
            transform.RotateAround(target.position, Vector3.up, 50 * Time.deltaTime);
            offset = transform.position - player.transform.position;
        }
        if (Input.GetKey(KeyCode.A) && Input.GetKey(KeyCode.K)){
            transform.RotateAround(target.position, Vector3.up, -50 * Time.deltaTime);
            offset = transform.position - player.transform.position;
        }
    }
}
