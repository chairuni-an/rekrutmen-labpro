using UnityEngine;
using System.Collections;

public class Enemy_Health : MonoBehaviour {
    public int enem_HP;
    public int enem_damage;
    public float enemy_Hit;
    public Transform frejaMagic;
    public Transform enem_Spot;
    public Animator anim;
    public bool attackedAble;

    // Use this for initialization
    void Start()
    {
        anim.enabled = true;
        enem_damage = 0;
        enem_HP = 100;
        attackedAble = false;
        anim.SetFloat("Enem_Dead", 0);
    }

    void Update()
    {
        if (enem_HP != 0)
        {
            enem_damage = 0;
            System.Random random = new System.Random();
            enemy_Hit = Vector3.Distance(enem_Spot.position, frejaMagic.position);

            if (attackedAble == true)
            {
                if (enemy_Hit < 2.5)
                {
                    enem_damage = random.Next(0, 20);

                    //if (enem_damage > 0) damage_show.text = "" + freja_damage;
                    //else if (freja_damage == 0) damage_show.text = "MISS";
                    //textAnim.Play("Damage_Text_Up");
                    //StartCoroutine(PlayAnimation());

                    attackedAble = false;
                    enem_HP = enem_HP - enem_damage;

                    if (enem_HP <= 0)
                    {
                        enem_HP = 0;
                        anim.SetFloat("Enem_Dead", 1);
                    }
                }
            }else
            {
                if (enemy_Hit >= 2) attackedAble = true;
                enem_damage = 0;
            }
        }
        else
        {
            //anim.Play("Dead");
            anim.enabled = false;
            transform.Translate(new Vector3(90, 90, 90) * Time.deltaTime);
        }

    }
}
