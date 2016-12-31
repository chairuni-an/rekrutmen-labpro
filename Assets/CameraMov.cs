using UnityEngine;
using System.Collections;

public class CameraMov : MonoBehaviour {
    public GameObject player;
    public Transform target;
    public Vector3 offset;
	// Use this for initialization
	void Start () {
        offset = transform.position - player.transform.position;
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKey(KeyCode.W)||Input.GetKey(KeyCode.S))
            transform.position = player.transform.position + offset;
        if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.D))
            transform.eulerAngles = new Vector3(target.transform.eulerAngles.x, target.transform.eulerAngles.y, target.transform.eulerAngles.z);

    }
}
