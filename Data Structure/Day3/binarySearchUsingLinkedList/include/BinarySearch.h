#ifndef BINARYSEARCH_H
#define BINARYSEARCH_H
#include <Node.h>

using namespace std;

class BinarySearch
{
     Node *ptr,*nptr,*head,*tail;
    int temp;
    public:
        BinarySearch() {
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

    Node * middle(Node *start,Node *last){
       //Node *start = head;
       //Node *last=tail->next;
       if(start==NULL)
           return NULL;
        Node *slow = start;
        Node *fast = start->next;

        while(fast != last){
            fast=fast->next;
            if(fast != last ){
                slow=slow->next;
               fast=fast->next;
            }

        }
       // cout<<slow->Data<<endl;
        return slow;
    }
    void binarySearch(int value){
        sorting();
        Node *start = head;
       Node *last=NULL;

       do
       {

           Node *mid = middle(start,last);
           if(mid == NULL)
            return ;

           if(mid -> Data == value){

             cout<<"found" << mid->Data;
              return ;
           }

           else if(mid->Data < value)
               start = mid->next;
           else
                last=mid;
       }while(last == NULL || last != start);
       cout<<"NOt found"<<endl;
       return  ;
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

#endif // BINARYSEARCH_H
