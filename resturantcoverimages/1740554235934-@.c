#include<stdio.h>
#include<malloc.h>
void main()
{
	float *p,n,i;
	printf("\n enter any number");
	scanf("%f",&n);
	p=(float*)malloc(n*sizeof(float));
//	for(i=0;i<n;i++)
//	{
	//	scanf("%f",&p[(float)i]);
//	}	
	for(i=0;i<n;i++)
	{
		printf("%f",p[i]);
		
	}
}
