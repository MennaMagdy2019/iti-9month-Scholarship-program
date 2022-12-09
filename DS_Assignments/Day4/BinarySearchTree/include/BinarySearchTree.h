#ifndef BINARYSEARCHTREE_H
#define BINARYSEARCHTREE_H

#include <iostream>
#include "Node.h"

using namespace std;
template<class T>
class BinarySearchTree
{
    Node<T> *root;
    public:
        BinarySearchTree() {
        root=NULL;
        }
        /******Add Fun*****/
      void Add(T data){

          Node<T> *node = new Node<T>(data);
          if(root == NULL)
             {
                 root=node;
             }
          else{
            Node<T> *current=root;
            Node<T> *parent;
             while(current != NULL){
                parent = current;
                if(data > current->Data)
                    {
                       current = current->Right;
                    }
                else
                    {
                        current = current->Left;
                    }
                }
          if(data>parent->Data)
                parent->Right=node;
          else
                parent->Left=node;

          }

      }
/***********Traverse Fun******/
      void Traverse()
        {
            Display(root);
        }
/******Max Depth**********/
      int GetMaxDepth(Node<T>* node){
          if(node == NULL)
            return 0;
          else{
                int MleftDepth = GetMaxDepth(node->Left);
                int MRightDepth = GetMaxDepth(node->Right);

                if(MleftDepth > MRightDepth){
                    return(MleftDepth+1);
                }
                else{
                    return (MRightDepth +1);
            }
          }
      }
       int GetMaxDepthRoot(){
          return GetMaxDepth(root);
      }

    protected:

    private:
         void Display(Node<T> *node)
        {
            if(node == NULL)
                return;

            Display(node->Left);
            cout << node->Data << "   ";
            Display(node->Right);
        }
     /*   void Display(Node<T> *node){
            cout<<"HELLO";
         if(node == NULL)
            return
        Display(node->Left);
        cout<<node->Data<< "  ";
        Display(node->Right);
        }
        */
};

#endif // BINARYSEARCHTREE_H
