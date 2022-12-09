#ifndef SORTING_H
#define SORTING_H

#include <iostream>
#include <Node.h>

using namespace std;

class Sorting
{
    Node *ptr,*nptr,*head,*tail;
    int temp;
    public:
        Sorting() {
          nptr=ptr=head=NULL;

        }
        /***Add Node Fun*****/
         void Add(int data)
        {
              Node *node = new Node(data);
             if(head == NULL)
            {
                ptr=head = tail = node;
            }
            else
            {
                tail->next = node;
                node->prev = tail;
                tail = node;
            }
        }
   void sorting( ){
      // Node *item = new Node();
       while(ptr->next !=NULL){
        nptr=ptr->next;
        while(nptr !=NULL){
            if(ptr->Data > nptr->Data){
                temp = ptr->Data;
                ptr->Data = nptr->Data;
                nptr->Data=temp;
            }
            nptr=nptr->next;
        }
        ptr=ptr->next;
       }

   }

   void  display(){
     Node *temp=head;
        while(temp !=NULL){
            cout << temp->Data <<"   ";
            temp=temp->next;
        }

   }


    protected:

    private:
};

#endif // SORTING_H
