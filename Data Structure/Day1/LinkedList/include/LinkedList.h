#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <iostream>
#include <Node.h>

using namespace std;
 template <class T>

class LinkedList
{
    Node <T> *head ,*tail;
    public:
        LinkedList() {
            head = tail = NULL;
        }
        /**********add Fun*******/
        void add(T data){
        Node<T> *node = new Node<T>(data);
        if(head ==NULL){
            head = tail =node;
        }
        else{
            tail->next = node;
            node->prev = tail;
            tail=node;
        }
        }
        /**********Display Fun********/
        void Display(){
        Node<T> *current = head;
        while(current != NULL){
            cout<< current->Data<<" ";
            current = current->next;
        }
        }
       /************Search Fun**********/
        int Search(T data)
        {
            Node<T> *node = GetNodeByData(data);
            return node !=NULL;
        }

        void Remove (T data)
        {
            Node<T> *node = GetNodeByData(data);

             if(node== NULL){
                return;
             }
             if(node == head){
                if(head == tail){
                    node=head=tail = NULL;
                }
                else {
                    head = head->next;
                    head->prev=NULL;
                }
             }
             else if(node ==tail){
                tail=tail->prev;
                tail->next = NULL;
             }
             else{
              /*  Node *A = node->prev;
                A->next = B;
                */
                node->prev->next = node->next;
                node->next->prev = node->prev;
             }
             delete node;
        }
        /**********GetCount Fun***********/
        int GetCount(){
         int cnt=0;
          Node<T> *current = head;
        while(current != NULL){
            ++cnt;
            current = current->next;
        }
         return cnt;
        }
        /*************GetDataByIndex***************/
         T GetDataByIndex(int index){
              int cnt=0;
           Node<T> *current = head;
           if(index>GetCount())
               cout<<"this index is not found";
           else{
                while(current != NULL){
                ++cnt;
                if(cnt == index){
                      // cout<<endl<<cnt<<" "<<index<<endl;
                    return current->Data;
                }
                else{
                    current = current->next;
                }
            }
               return NULL;
            }
           }

    /**************InsertAfter********/
         void InsertAfter(T data, T afterData){
            Node<T> *node = GetNodeByData(afterData);
            Node<T> *nodeData = new Node<T>(data);
             if(node== NULL){
                cout<<endl<<"you insert element not Found"<<endl;
                return;
             }
             else{
                if(head==taile){
                    node->next =nodeData;
                    nodeData->next=tail;
                }
                if(node ==tail){
                        tail->next=nodeData;
                       nodeData->next=NULL;
                }
                else{
                    nodeData->next = node->next;
                    node->next = nodeData;
                }
             }
         }



    protected:

    private:
        Node<T>* GetNodeByData(T data){
            Node <T> *current = head;

            while(current != NULL){
                if(current->Data == data){
                    return current;
                }
                current = current->next;
            }
            return NULL;
        }
};

#endif // LINKEDLIST_H
